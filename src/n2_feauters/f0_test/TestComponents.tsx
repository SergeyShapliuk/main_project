import React, {useState} from "react";
import Input from "../../n1_main/m1_ui/common/input/Input";
import Button from "../../n1_main/m1_ui/common/button/Button";
import Checkbox from "../../n1_main/m1_ui/common/checkbox/Checkbox";


function TestComponents() {
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string | null>(null)


    const showAlert = () => {
        if (text.trim() !== "") {
            alert(text)
            setText("")
        } else {
            return setError("Title is required")
        }
    }

    const [checked, setChecked] = useState<boolean>(false)

    return (
        <>
            <Input value={text}
                   onChangeText={setText}
                   onEnter={showAlert}
                   error={error}
                   setError={setError}/>
            <Button onClick={showAlert}>send</Button>
            <Checkbox checked={checked}
                      onChangeChecked={setChecked}/>
        </>
    )
}

export default TestComponents;