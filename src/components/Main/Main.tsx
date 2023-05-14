import { ContainerDoConteudo } from "./style";

interface ArticleProps {
    children: React.ReactNode;
}

export function Main({ children }: ArticleProps) {
    return (
        <ContainerDoConteudo>
            {children}
        </ContainerDoConteudo>
    )
}