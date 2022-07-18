package com.example.loingtest.repositroy

import org.springframework.data.jpa.repository.JpaRepository

interface MembersRepository : JpaRepository<Members, String>