import React, {Component} from 'react';
import DigitvlLinktreeProfilePage from "../../Components/DigitvlLinktreeProfilePage";
import {useRouter} from "next/router";

export default function dTreeProfile(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const username_slug = router.query.username_slug;
    return (
        <div>
            <DigitvlLinktreeProfilePage dataparams={router.query}/>
        </div>
    );
}

export async function getServerSideProps(context){

    return {props: {}}
}