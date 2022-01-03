import React, {FC, useEffect, useState} from "react";
import {Item, ProductsRootObject} from "../../models/interfaces/item/Item";
import {LoadingBox} from "../box/loadingBox";
import {ProductItem} from "./productItem.component";
import { useParams } from 'react-router-dom';
export const ProductDetail:FC<{}>=({})=>{
    //id:string
    let {id}= useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Item|null>(null);
    const sleep = (milliseconds:number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const getProductDataAsync = async () => {
        const result:Item={
            id:"GGOEAFKA087499",
            name: "Android Small Removable Sticker Sheet",
            description: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            features: "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            price: "2.99",
            keywords: "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
            url: "Android+Small+Removable+Sticker+Sheet",
            category: "accessories",
            subcategory: "accessories"
            ,imageurl:"https://images.unsplash.com/photo-1522363757703-61225a8e04ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHw0NTg1MDAxfHx8fHx8fDE2NDAzNTMxODE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480"
        }
        return result;
    }
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
    }, [])

    return(
        <>
            {loading && <LoadingBox/>}
            {data && <ProductItem key={data.id} item={data}/>}
                </>
    );
};
