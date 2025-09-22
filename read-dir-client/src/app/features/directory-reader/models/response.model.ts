export interface File {
  name?: string;
  fullPath?: string;
  size?: any;
  type?: string;
  created?: string;
}

export interface FileResponse {
  name?: string;
  fullPath?: string;
  size?: any;
  type?: string;
  created?: string;
  subFiles?: File[];
  expanded?: boolean;
}
