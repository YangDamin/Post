import create from "zustand";
import {devtools} from "zustand/middleware";

const useWriteStore = create(
    devtools(
        (set) => ({
            title: '',             // 제목
            content: '',            // 내용
            setTitle: (t) => {
                set({title: t});
            },
            setContent: (c) => {
                set({content: c});
            }
        })
    )
)

export default useWriteStore;