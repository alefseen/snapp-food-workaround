import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useVirtualizer } from '@tanstack/react-virtual';

import useDebouncedCallback from 'hooks/debounced-callback';
import VendorCard from './components/vendorCard';
import styles from './index.module.scss';
import { getVendors } from './slice';

function Vendors() {
  const scrollableAreaRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const { vendors, count } = useSelector(state => state.vendors);
  const dispatch = useDispatch();

  const next = useDebouncedCallback(
    useCallback(() => {
      setCurrentPage(prevState => prevState + 1);
      dispatch(getVendors(currentPage));
    }, [currentPage]),
    200
  );

  const vendorsVirtualizer = useVirtualizer({
    count: vendors.length,
    estimateSize: () => 264,
    getScrollElement: () => scrollableAreaRef.current,
  });

  useEffect(() => {
    next();
  }, []);

  return (
    <main>
      <div
        ref={scrollableAreaRef}
        className={styles.scrollable_area}
        id={'scrollable_area'}>
        <InfiniteScroll
          dataLength={vendors.length}
          next={next}
          scrollableTarget="scrollable_area"
          hasMore={vendors.length !== count}
          scrollThreshold={1}
          loader={<span>'loading....'</span>}>
          <ul
            className={styles.list}
            style={{
              height: `${vendorsVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}>
            {vendorsVirtualizer.getVirtualItems().map(virtualItem => (
              <li
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                key={virtualItem.key}
                className={styles.list__item}>
                {vendors[virtualItem.index] && (
                  <VendorCard vendor={vendors[virtualItem.index]} />
                )}
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    </main>
  );
}

export default Vendors;
