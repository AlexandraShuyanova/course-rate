import {getPage} from "@/api/page";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import {getMenu} from "@/api/menu";

export const metadata: Metadata = {
    title: "Page"
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item=>item.pages.map(page=> ({alias: page.alias})))
}

export default async function ProductPage({ params }: { params: Promise<{ alias: string }> }) {
    const {alias} = await params
    const page = await getPage(alias)
    if(!page) {
        return notFound();
    }
    return (
        <div>
            {page.title}
            {page.secondCategory}
        </div>
    )

}