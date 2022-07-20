package com.example.loingtest.controller

import com.example.loingtest.domain.MembersRequest
import com.example.loingtest.repositroy.Members
import com.example.loingtest.service.MembersService
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/members")
class MembersController(private val membersService: MembersService) {

    private val log = LoggerFactory.getLogger(javaClass)

    @PostMapping("/login")
    fun login(@RequestBody MR: MembersRequest) {
        log.info("login controller 시작")
        membersService.login(MR.id, MR.pw)
    }

    @PostMapping("/join")
    fun login(@RequestBody members: Members) {
        log.info("join controller 시작")
        membersService.join(members)
    }

}