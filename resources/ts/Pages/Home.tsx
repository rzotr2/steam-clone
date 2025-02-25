import * as React from "react";
import Link from "../components/atoms/typography/link/link";
import Text from "../components/atoms/typography/text/text-element";
import SearchButton from "../components/atoms/buttons/search";
import ProfileAvatar from "../components/atoms/avatars/profile-avatar";
import Input from "../components/atoms/inputs/input-element";
import Button from "../components/atoms/buttons/button";
import SteamLogo from "../components/atoms/images/steamLogo";
import Menu from "../components/organisms/menu";
import Header from "../components/organisms/header";

export default function Home() {
    return (
        <>
            <div>
                <div className="flex justify-center">
                    <Header />
                </div>
                <div className="flex gap-5 mb-5">
                    <Link variant="primary" text="Survival"/>
                    <Link variant="secondary" text="Survival"/>
                    <Link variant="outline" text="Survival"/>
                </div>
                <div className="flex gap-5 mb-5">
                    <Text variant="main-heading" text="Survival"/>
                    <Text variant="sub-heading" text="Survival"/>
                    <Text variant="title" text="Survival"/>
                    <Text variant="subtitle" text="Survival"/>
                    <Text variant="body" text="Survival"/>
                </div>
                <div className="flex gap-5 mb-5">
                    <SearchButton variant="primary"/>
                    <SearchButton variant="outline"/>
                </div>
                <div className="flex gap-5 mb-5">
                    <ProfileAvatar variant={"primary-sm"} />
                    <ProfileAvatar variant={"primary-xl"} />
                    <ProfileAvatar variant={"outline-sm"} />
                    <ProfileAvatar variant={"outline-xl"} />
                    <ProfileAvatar variant={"primary-sm"} url="https://i.ibb.co/GvGJQ3rQ/2025-02-09-12-17-55.jpg" />
                    <ProfileAvatar variant={"primary-xl"} url="https://i.ibb.co/GvGJQ3rQ/2025-02-09-12-17-55.jpg" />
                    <ProfileAvatar variant={"outline-sm"} url="https://i.ibb.co/ds9RR2Xf/2025-02-09-12-18-07.jpg" />
                    <ProfileAvatar variant={"outline-xl"} url="https://i.ibb.co/ds9RR2Xf/2025-02-09-12-18-07.jpg" />
                </div>
                <div className="p-2 box-border flex gap-5 mb-5">
                    <div>
                        <Input variant="primary" text="search"/>
                    </div>
                    <div>
                        <Input variant="secondary" text="Search for products"/>
                    </div>
                    <div>
                        <Input variant="outline"/>
                    </div>
                </div>
                <div className="p-2 box-border flex gap-5 mb-5">
                    <div>
                        <Button variant="primary" text="Install Steam"/>
                    </div>
                    <div>
                        <Button variant="secondary-green" text="Add to cart"/>
                    </div>
                    <div>
                        <Button variant="secondary-blue" text="Bundle info"/>
                    </div>
                    <div>
                        <Button variant="outline" text="Follow"/>
                    </div>
                </div>
                <div className="p-2 inline-block">
                    <SteamLogo/>
                </div>
                <div className="p-2">
                    <Menu/>
                </div>
            </div>
        </>
    );
}
