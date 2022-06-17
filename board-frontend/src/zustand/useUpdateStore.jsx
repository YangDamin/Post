import create from "zustand";
import {devtools} from "zustand/middleware";

const useUpdateStore = create(
    devtools(
        (set) => ({
            updateTitle: '',           // 수정할 title
            updateContent: '',         // 수정할 content
            setUpdateTitle: (t) => {
                set({updateTitle: t});
            },
            setUpdateContent: (c) => {
                set({updateContent: c});
            }
        })
    )
)

export default useUpdateStore;