import { ContainerDoConteudo } from "./style";

interface ArticleProps {
    children: React.ReactNode;
}

export function Article({ children }: ArticleProps) {
    return (
        <ContainerDoConteudo>
            {children}
        </ContainerDoConteudo>
    )
}