import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/yup/TraducoesYup"
import { Box, Card, CardContent, Typography, CardActions, Button, CircularProgress, Skeleton } from "@mui/material"
import { Fragment, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { RHTextField } from "../FormComponents/RHTextField"
import infoUser from '../../../data/json/info.json';

const createAccountSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    birthDate: yup.string().required().min(10).max(10),
    userName: yup.string().required(),
    password: yup.string().required().min(3),
})

interface IInfoAccountInput {
    name: string
    cpf: string
    email: string
    birthDate: string
    userName: string
    password: string
}

export const DetalhesUsuario = () => {
    const [user, setUser] = useState<IInfoAccountInput>(infoUser)
    const [isLoadingFields, setIsLoadingFields] = useState(false)

    const { handleSubmit, control } = useForm<IInfoAccountInput>({
        resolver: yupResolver(createAccountSchema),
        defaultValues: user
    })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit: SubmitHandler<IInfoAccountInput> = (data) => {
        setUser(infoUser)
        setIsLoadingFields(false)
        setIsLoading(false)
        console.log(data)
    }

    return (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center' sx={{ background: "background.default" }}>
            <Box>
                <Card>
                    <CardContent>
                        <Box display='flex' flexDirection='column' gap={2} width={500} padding={2}>
                            <Typography variant='h4' align='center'>Suas informações</Typography>
                            {
                                isLoadingFields && (
                                    <Fragment>
                                        <Skeleton variant="rectangular" animation="wave" height={56} />
                                        <Skeleton variant="rectangular" animation="wave" height={56} />
                                        <Skeleton variant="rectangular" animation="wave" height={56} />
                                        <Skeleton variant="rectangular" animation="wave" height={56} />
                                        <Skeleton variant="rectangular" animation="wave" height={56} />
                                        <Skeleton variant="rectangular" animation="wave" height={56} />
                                    </Fragment>

                                )
                            }
                            {
                                !isLoadingFields && (
                                    <Fragment>
                                        <RHTextField
                                            name="name"
                                            control={control}
                                            label="Nome"
                                            type="text"
                                            disabled={isLoading}
                                        />
                                        <RHTextField
                                            name="cpf"
                                            control={control}
                                            label="CPF"
                                            type="text"
                                            disabled={isLoading}
                                        />
                                        <RHTextField
                                            name="email"
                                            control={control}
                                            label="E-mail"
                                            type="email"
                                            disabled={isLoading}
                                        />
                                        <RHTextField
                                            name="birthDate"
                                            control={control}
                                            label="Data de nascimento"
                                            type="text"
                                            disabled={isLoading}
                                        />
                                        <RHTextField
                                            name="userName"
                                            control={control}
                                            label="Usuário"
                                            type="text"
                                            disabled={isLoading}
                                        />
                                        <RHTextField
                                            name="password"
                                            control={control}
                                            label="Senha"
                                            type="password"
                                            disabled={isLoading}
                                        />
                                    </Fragment>
                                )
                            }
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
                                Atualizar
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}