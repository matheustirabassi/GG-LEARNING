package com.br.gglearning.config

import com.br.gglearning.security.JwtAuthenticationFilter
import com.br.gglearning.security.util.JwtUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.CorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource

@Configuration
@EnableWebSecurity
class SecurityConfig : WebSecurityConfigurerAdapter() {

    private final val PUBLIC_MATCHERS =
        arrayOf("/h2-console/**", "/users/create", "/users/create/**", "/login/", "/login/*")

    private final val PUBLIC_MATCHERS_GET = arrayOf("/users")

    @Autowired
    private lateinit var environment: Environment

    @Autowired
    private lateinit var jwtUtil: JwtUtil

    @Autowired
    private lateinit var userDetailsService: UserDetailsService

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        if (environment.activeProfiles.contains("test")) {
            http.headers().frameOptions().disable()
        }

        http.cors().and().csrf().disable()
        http.authorizeRequests()
            .antMatchers(HttpMethod.GET, * PUBLIC_MATCHERS_GET).permitAll()
            .antMatchers(* PUBLIC_MATCHERS).permitAll().anyRequest()
            .authenticated()
        http.addFilter(
            JwtAuthenticationFilter(
                authenticationManager(),
                jwtUtil
            )
        )
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    }

    @Throws(java.lang.Exception::class)
    override fun configure(auth: AuthenticationManagerBuilder) {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder())
    }

    @Bean
    fun corsConfigurationSource(): CorsConfigurationSource {
        val source = UrlBasedCorsConfigurationSource()
        source.registerCorsConfiguration(
            "/*",
            CorsConfiguration().applyPermitDefaultValues()
        )

        return source
    }

    @Bean
    fun bCryptPasswordEncoder(): BCryptPasswordEncoder {
        return BCryptPasswordEncoder()
    }
}