const initState={

}

export type InitStateType=typeof initState

export const authReducer=(state=initState,action:any):InitStateType=>{
    switch (action.type){
        default:return state
    }
}
