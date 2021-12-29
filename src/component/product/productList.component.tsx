import React,{useState,useEffect} from 'react';
import {Item, ProductsRootObject} from "../../models/interfaces/item/Item";
import {ProductItem} from "./productItem.component";
import {LoadingBox} from "../box/loadingBox";
function ProductList() {
    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);

    const sleep = (milliseconds:number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    //#region product methods
    const getProductDataAsync = async () => {
        await sleep(5000) //wait 5 seconds
        const response = await fetch('products.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data: ProductsRootObject = await response.json()
        //console.log(`json data ${JSON.stringify(data.products.data.items)}`);

        //setData(data.products.data.items);
        const result: Item[] = data != null &&
        data.products != null &&
        data.products.data != null &&
        data.products.data.items != null &&
        data.products.data.items.length != 0
            ? data.products.data.items : [];
        //setData(result);
        //console.log('ProductsRootObject ' +JSON.stringify( result));
        return result;
    }
    const getProductData = () => {
        fetch('products.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            // console.log(`response date ${res}`);
            return res.json();
        }).then((items: ProductsRootObject) => {
            //console.log(`json data ${JSON.stringify(res)}`);
            const result: Item[] = items != null &&
            items.products != null &&
            items.products.data != null &&
            items.products.data.items != null &&
            items.products.data.items.length != 0
                ? items.products.data.items : [];
            setData(result);
            // console.log(`json data ${JSON.stringify(result)}`);
        })
    }
    //#endregion
    useEffect(() => {
        let loadData = () => {
            setLoading(true);
          //
            getProductDataAsync().then((res) => {
                setData(res);
                setLoading(false);
                //console.log(`json data ${JSON.stringify(res)}`);
            }).catch((err) => {
                alert(JSON.stringify(err));
                setLoading(false);

            });
        };
        loadData();
        /*(async ()=>{
            try {
                 const dataResult=await getData();
                alert('pass');
                 console.log('dataResult '+ JSON.stringify(dataResult))
                 setData(dataResult);
            }
            catch (err) {
                alert('error'+ JSON.stringify(err));
                setData([]);
            }
        })();*/
    }, [])
    return (
        <React.Fragment>
            <div>
                {loading && <LoadingBox/>}
                {data && data.map((row: Item) =>
                    (
                        <ProductItem key={row.id} item={row}/>
                        // <div className="card" >
                        //     <img  src={`${row.imageurl}`}  className="card-img-top" style={} alt="..."/>
                        //     <div className="card-body">
                        //         <h5 className="card-title">{row.name}</h5>
                        //         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        //         <p className="card-text">{row.description}</p>
                        //         <a href="#" className="card-link">details</a>
                        //     </div>
                        // </div>


                    )
                )}
            </div>
        </React.Fragment>

    );
}
export default ProductList;
