import * as React from "react";
import InputElement from "../../../atoms/inputs/InputElement";
import SearchButton from "../../../atoms/buttons/Search";

export default function MenuInputSearch() {
    return (
        <>
            <div className={"bg-[#316282] text-text-primary border-[1px] border-transparent " +
                "hover:border-[#65B7E8] brightness-75 flex justify-between me-0.5 rounded-sm ring-1 shadow-black"}>
                <InputElement variant="primary" text="search"/>
                <SearchButton variant="outline" />
            </div>
        </>
    );
}
