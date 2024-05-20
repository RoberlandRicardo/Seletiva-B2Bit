
export enum TypeAlert {
    ERROR,
    SUCCESS,
}

export interface AlertProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    description?: string,
    type: TypeAlert,
}