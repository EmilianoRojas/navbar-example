export declare function logout(): Promise<void>;
export declare function changeCompany(): void;
export declare const MenuService: {
    apiLink: string;
    getAlert(): Promise<any>;
    getBanners(): Promise<any>;
    getServices(): Promise<any>;
    getFormalities(): Promise<any>;
    getNews(): Promise<any>;
};
