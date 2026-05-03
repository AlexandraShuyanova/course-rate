import {Heading} from "@/components/ui/Heading";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    return (
        <div>
            <Heading level='h1'>Курс: {slug}</Heading>
            <Heading level='h3'>Профессия Дизайнер от 0 до PRO</Heading>
            <Heading level='h2'>Вакансии Photoshop</Heading>
            <Heading level='h2'>Преимущества специалиста</Heading>
            <Heading level='h4'>Мобильность специалиста</Heading>
        </div>
    )

}