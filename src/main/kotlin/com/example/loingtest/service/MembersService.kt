package com.example.loingtest.service

import com.example.loingtest.repositroy.MembersRepository
import org.springframework.stereotype.Service

@Service
class MembersService(private val membersRepository: MembersRepository) {
    fun login(id: String, pw: String) {
        println("service 시작")

        try{
            val user = membersRepository.findById(id).get()

            if(id == user.id && pw == user.pw){
                println("로그인성공")
            }else{
                println("로그인실패: 비밀번호 확인바람")
            }
        }catch(e: Exception){
            println(e.message)
            println("아이디가 확인바람")
        }

    }
}