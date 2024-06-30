import { favContactsListActions } from "./favContact-slice";

export const addToFavContact = (key)=>{
    return(dispatch)=>{
        fetch(`https://contact-list-app-c96f0-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${key}.json`)
        .then(res=>res.json())
        .then(data=>{
            fetch('https://contact-list-app-c96f0-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list.json',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(data)

            }).then(res=>res.json())
            .then(data=>{
                const newKey=data.name;
                dispatch(favContactsListActions.setContactKeys({
                    key:key,
                    favKey:newKey
                }))
            })
        }).catch(error=> console.log(error))
    }
}

export const removeFromFavContact =  (key,contactKeys)=>{
    return(dispatch)=>{
        const keyToRemove = key;
        const indexToRemove = contactKeys.findIndex(contact=>contact.key=== keyToRemove)

        if(indexToRemove!== -1){
            const favKeyToRemove= contactKeys[indexToRemove].favKey;
            fetch(`https://contact-list-app-c96f0-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list/${favKeyToRemove}.json`,{
                method: 'delete'
            }).catch(error=>console.log(error))
        }
    }
}