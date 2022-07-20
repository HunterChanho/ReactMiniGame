package com.example.loingtest.repositroy

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Members (
        @Id
        @Column(nullable = false)
        var id: String,

        var pw: String,

        var address: String,

        var brdt: Int? = null,

        var phoneNum: String? = null,

        var gendCd: Char? = null
)