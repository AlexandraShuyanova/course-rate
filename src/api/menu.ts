import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/api/api";

export async function getMenu(firstCategory: number): Promise<MenuItem[]>  {
    const res = await fetch(API.topPage.find,
        {
            method: 'POST',
            body: JSON.stringify({
                firstCategory
            }),
            headers: new Headers({'content-type': 'application/json'})
        });

    if (!res.ok) {
        throw new Error('Failed to fetch menu')
    }
    return res.json();
}