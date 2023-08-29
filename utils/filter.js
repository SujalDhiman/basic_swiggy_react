export function filter(chkText,restaurant){
    if(chkText === "")
        return restaurant;
    else
    {
        let regex=new RegExp(chkText,"gi")
        let filteredResult=restaurant.filter((ele)=>regex.test(ele.info.name))
        if(filteredResult.length === 0)
            return restaurant;
        else
            return filteredResult;
    }
}