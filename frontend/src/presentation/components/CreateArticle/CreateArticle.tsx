import { Box, Button, Card, CardActions, CardContent, CircularProgress } from "@mui/material"
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { RHTextField } from "../FormComponents/RHTextField"
import { RHTextArea } from "../FormComponents/RHTextArea"
import { IInfoArticleInput, ArticleAPI } from "presentation/api/ArticleAPI"

export const CreateArticle = () => {
    const { control, handleSubmit } = useForm<IInfoArticleInput>({
        resolver: yupResolver(ArticleAPI.createArticleSchema)
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<IInfoArticleInput> = (data) => {
        setIsLoading(true)
        ArticleAPI.create(data)
    }
    return (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' sx={{ background: "background.default" }}>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={900} padding={2}>
                        <RHTextField
                            name="title"
                            control={control}
                            label="Titulo"
                            type="text"
                            disabled={isLoading}
                        />
                        <RHTextField
                            name="subtitle"
                            control={control}
                            label="Subtitulo"
                            type="text"
                            disabled={isLoading}
                        />
                        <RHTextArea
                            name="content"
                            control={control}
                            label="Conteúdo"
                            type="text"
                            disabled={isLoading}
                            rows={20}
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>
                        <Button
                            variant='contained'
                            disabled={isLoading}
                            onClick={handleSubmit(onSubmit)}
                            endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                        >
                            Criar artigo
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}