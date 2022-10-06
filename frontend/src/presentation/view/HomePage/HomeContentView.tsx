import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ArticleCard } from "presentation/components/Card/ArticleCard"
import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import { ROUTES } from "Routes"
import Imagem from "../../../assets/imgs/img.jpg"

export const HomeContentView = () => {
	const theme = useTheme()
	const lgDown = useMediaQuery(theme.breakpoints.down("lg"))
	return (
		<PageBaseLayout showSideFooter>
			<Box display="flex" flexDirection="column" marginX={25}>
				<Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
					<Box display="flex" flexDirection="column" alignItems="center" >
						<Typography
							id="title"
							variant="h1"
							color="secondary.contrastText"
							padding={2}
						>GGLearning a melhor ferramenta para começar a programar</Typography>
						<Box>
							<Button
								variant="contained"
								href={ROUTES.CREATE_ACCOUNT}>
								<Typography
									variant="h3"
									color="secondary.contrastText"
								>Crie uma conta</Typography>
							</Button>
						</Box>
					</Box>
					<Box
						hidden={lgDown}
						component="img"
						src={Imagem}
						sx={{
							borderRadius: "10px",
							maxHeight: { xl: 600, lg: 400 },
							maxWidth: { xl: 700, lg: 500 },
						}}
					>
					</Box>
				</Box>
				<Box>
					<Typography variant={"h2"} my="32px" color="secondary.contrastText" sx={{ alignmentBaseline: "title" }}>
						Conheça alguns artigos
					</Typography>
				</Box>
				<Box display='flex' justifyItems="center" alignItems="center" >
					<Grid container spacing={2} justifyContent="space-evenly" >
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
								id={1}
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item sm={12} md={6} lg={4} xl={3}>
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</PageBaseLayout>
	)
}