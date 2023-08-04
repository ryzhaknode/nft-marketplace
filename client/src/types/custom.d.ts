interface Window {
  ethereum?: {
    request: (args: any) => Promise<any>;
    on: (args: any, callback: Function) => Promise<any>;
  };
}
