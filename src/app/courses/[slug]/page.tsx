import {Heading} from "@/components/ui/Heading/Heading";
import {Button} from "@/components/ui/Button/Button";
import {Paragraph} from "@/components/ui/Paragraph/Paragraph";
import {Tag} from "@/components/ui/Tag/Tag";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    return (
        <div>
            <Heading level='h1'>Курс: {slug}</Heading>
            <Heading level='h3'>Профессия Дизайнер от 0 до PRO</Heading>
            <Heading level='h2'>Вакансии Photoshop</Heading>
            <Heading level='h2'>Преимущества специалиста</Heading>
            <Heading level='h4'>Мобильность специалиста</Heading>
            <Button variant='primary'>Button</Button>
            <Button variant='ghost' arrow='right'>Читать отзывы</Button>
            <Tag variant='ghost'>Design</Tag>
            <Tag variant='green'>-10 000 ₽ </Tag>
            <Tag variant='red'>hh.ru </Tag>
            <Tag variant='primary'>Work in Photoshop</Tag>
            <Tag variant='grey'>10</Tag>
            <Paragraph size={'large'}>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге.
                Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис.
                В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Paragraph>
            <Paragraph size={'middle'}>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки,
                которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
                Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
            <Paragraph size={'small'}>Напишу сразу в двух курсах, так как проходил оба.
                Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения
                языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому,
                что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять
                Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас.
                Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains.
                Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт
                коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Paragraph>
        </div>
    )

}