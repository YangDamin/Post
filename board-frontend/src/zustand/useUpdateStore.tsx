import create, {SetState} from "zustand";
import {devtools} from "zustand/middleware";

const useUpdateStore = create(
    devtools(
        (set:SetState<any>) => ({
            updateTitle: '',           // 수정할 title
            updateContent: '',         // 수정할 content
            setUpdateTitle: (t : string) => {
                set({updateTitle: t});
            },
            setUpdateContent: (c : string) => {
                set({updateContent: c});
            }
        })
    )
)

export default useUpdateStore;