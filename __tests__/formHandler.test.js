import { TestScheduler } from "jest"
import {handleSubmit} from "../src/client/js/formHandler"



describe("Test for sumbit ", () => {

    test("check submit goes true" , ()=>{
        expect(handleSubmit).toBeDefined()
    })

})