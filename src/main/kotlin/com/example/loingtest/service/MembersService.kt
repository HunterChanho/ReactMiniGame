package com.example.loingtest.service

import com.example.loingtest.repositroy.Members
import com.example.loingtest.repositroy.MembersRepository
import org.slf4j.LoggerFactory
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.servlet.http.HttpSession

@Service
class MembersService(private val membersRepository: MembersRepository) {

    private val log = LoggerFactory.getLogger(javaClass)

    fun login(id: String, pw: String) {
        log.info("login service 시작")
        try{
            val user = membersRepository.findById(id).get()

        }catch(e: Exception){
            log.info(e.message)
        }
    }

    fun join(members: Members) {
        log.info("join service 시작")
        try{
            membersRepository.save(members)
        }catch(e: Exception) {
            log.info(e.message)
        }
    }


}