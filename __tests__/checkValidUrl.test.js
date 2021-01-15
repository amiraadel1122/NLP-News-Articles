import {checkValidUrl} from "../src/client/js/checkValidUrl";



describe("Test for url validity ", () => {

    test("check if url is valid" , ()=>{
        expect(checkValidUrl('https://www.forbes.com/sites/jonathanponciano/2021/01/15/dow-falls-200-points-as-wall-street-worries-over-opposition-to-bidens-19-trillion-stimulus-planand-higher-taxes/?sh=63cc46f0234d')).toBe(true)
    })
})