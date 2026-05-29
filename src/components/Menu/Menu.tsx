import {getMenu} from "@/api/menu";

export async function Menu() {
    const menu  = await getMenu(0);
    console.log(menu)
    return (
        <div>
            {menu.length}
        </div>
        )
}