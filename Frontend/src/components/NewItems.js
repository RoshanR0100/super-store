import React from 'react'
import {useState, useEffect} from 'react'

export function NewItems() {
    //data that will be passed into the POST method later on
    const formInfo = {
        name: String,
        description: String,
        price: Number,
        stock: Number
    }

    //method to POST the data to server which will post to mongodb
    useEffect(() => {
        //fetch from the port/ that is set in server as POST & GET method one
        fetch("/item", {
            //specifying that this will POST data to DB
            method: "POST",
            //specifying what format the data will be in
            headers: {
                'Content-type':"application/json"
            },
            //declaring that the data will be formInfo
            body: JSON.stringify(formInfo)
            })
            //specifying that the response will be in JSON format
        .then(res => res.json())
        //console log the data to trouble shoot
        .then(data => console.log(data))
    }, [])   
    
    //return html form for the data to be passed in to
}

