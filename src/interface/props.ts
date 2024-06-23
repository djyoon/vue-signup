export interface btnProps {
    labels: string[];
    evts: [];
}
export interface inputProps {
    usePinia:any;
    useCheckValid: boolean;
    labels: string[];
    types: string[];
    refs: string[];
    phs: string[];
    evts: any[];
}
export const defaultVals = {
    btnProps: {
        labels: () => [],
        evts: () => [],
    },
    inputProps: {
        usePinia:{},
        useCheckValid: true,
        labels: () => [],
        types: () => [],
        refs: () => [],
        phs: () => [], //placeholder
        evts: ():any[] => [],
    }
}

