package com.example.loingtest.controller

import com.example.loingtest.domain.MembersRequest
import com.example.loingtest.service.MembersService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/members")
class MembersController(private val membersService: MembersService) {

    @PostMapping("/login")
    fun login(@RequestBody MR: MembersRequest) {
        println("controller 시작")
        membersService.login(MR.id, MR.pw)
    }


}