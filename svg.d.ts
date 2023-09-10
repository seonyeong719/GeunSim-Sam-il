// declare module "*.svg" {
//   const content: React.FC<React.SVGProps<SVGElement>>;
//   export default content;
// }
// // 모든 svg 파일에 React.FC<React.SVGProps<SVGElement>> 타입을 정의하여 ts에서 알리는 코드

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
