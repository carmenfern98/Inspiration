/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import React from "react";
import { getQuote } from "../../utils/quoteapi";
import styled from '@emotion/styled';
    
    const QuoteContainer = styled.div`
    padding: 1rem;
    max-width: 40rem;
    margin: 2rem auto;
    border-radius: 10px;
    `
    const QuoteText = styled.h3`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    `
    const AuthorText = styled.h4`
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    `



export const QuoteWidget = () =>{

    const [quote, setQuote] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [author, setAuthor] = useState('')

    useEffect(()=>{
        setLoading(true);
        setError(null);

        getQuote()
        .then(data=>{
            console.log('Quote data', data);
            setQuote(data.content);
            setAuthor(data.author)
            setLoading(false)
        })

        .catch(err=>{
            setError(err.message);
            setLoading(false)
        })
    }, [])


    return(
        <QuoteContainer>
            <QuoteText>{quote}</QuoteText>
            <AuthorText>{author}</AuthorText>
        </QuoteContainer>
    )
};