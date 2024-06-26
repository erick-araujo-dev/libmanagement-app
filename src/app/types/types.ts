export interface BookCreateRequest {
    title: string;
    authors: string;
    publication: string;
    copies: number;
  }
  
  export interface BookUpdateRequest {
    title: string;
    authors: string;
    publication: string;
    copies: number;
  }
  
  export interface BookCreateResponse {
    cdBook: number;
    title: string;
    authors: string;
    publication: string;
    copies: number;
  }
  
  export interface BookResponse {
    id: number;
    title: string;
    authors: string;
    publication: string;
    copies: number;
  }
  