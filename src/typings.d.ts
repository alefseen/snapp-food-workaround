declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.woff2' {
  const src: string;
  export default src;
}
