import create from "zustand";
import {devtools} from "zustand/middleware";

const useViewStore = create(
    devtools(
        (set) => ({
            title: '',
            content: '',
            date: '',
            viewCnt: 0,
            setTitle: (t) => {
                set({title: t});
            },
            setContent: (c) => {
                set({content: c});
            },
            setDate: (d) => {
                set({date: d});
            },
            setViewCnt: (c) => {
                set({viewCnt: c});
            }
        })
    )
)

export default useViewStore;