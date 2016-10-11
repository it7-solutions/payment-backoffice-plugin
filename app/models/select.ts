export interface Select {
    values: SelectValue[];
}

export interface SelectValue {
    label?: string;
    key?: string;
    id?: number;
    name?: string;
}
