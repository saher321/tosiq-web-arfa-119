import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'
import axios from 'axios'
import { USER_API } from '../utils/apis'
import {
    ArrowLeft,
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    CheckCircle2,
    CreditCard,
    Eye,
    GraduationCap,
    HeartPulse,
    Mail,
    MapPin,
    Monitor,
    Phone,
    Ruler,
    ShieldCheck,
    User,
    UserRound,
    Weight,
    Wallet,
} from "lucide-react";
const UserDetails = () => {
    const [user, setUser] = useState({})
    const params = useParams()
    const getSingleUser = async () => {
        try {
            // REQUEST METHODS: Get, Post, Put / Patch, Delete
            const response = await axios.get(`${USER_API}/${params.id}`)
            setUser(response.data)
        } catch (error) {
            console.error("ERROR: ", error)
            throw new Error(error)
        }
    }

    useEffect(() => {
        if (params.id > 0) {
            getSingleUser()
        }
    }, [params.id])
    return (
        <WebLayout>
            <div className="min-h-screen bg-slate-50">
                <div className="mx-auto max-w-7xl">
                    {/* Profile */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <div className="h-32 bg-gradient-to-r from-sky-50 to-sky-100 sm:h-40" />

                        <div className="px-5 pb-6 sm:px-8">
                            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 md:flex-row md:items-end md:justify-between">

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                                    <div className="relative">
                                        <img
                                            src={user.image}
                                            alt={`${user.firstName} ${user.lastName}`}
                                            className="h-28 w-28 rounded-2xl border-4 border-white bg-slate-100 object-cover shadow-lg"
                                        />

                                        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white">
                                            <CheckCircle2 size={15} />
                                        </div>
                                    </div>

                                    <div className="pb-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                                {user.firstName} {user.lastName}
                                            </h2>

                                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700">
                                                {user.role}
                                            </span>
                                        </div>

                                        <p className="mt-1 text-sm text-slate-500">
                                            @{user.username} · User ID #{user.id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <CalendarDays size={19} />
                                </div>
                                <span className="text-xs uppercase tracking-wide text-slate-400">
                                    Age
                                </span>
                            </div>
                            <p className="mt-4 text-xl font-bold text-slate-900">
                                {user.age} years
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                    <Ruler size={19} />
                                </div>
                                <span className="text-xs uppercase tracking-wide text-slate-400">
                                    Height
                                </span>
                            </div>
                            <p className="mt-4 text-xl font-bold text-slate-900">
                                {user.height} cm
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                                    <Weight size={19} />
                                </div>
                                <span className="text-xs uppercase tracking-wide text-slate-400">
                                    Weight
                                </span>
                            </div>
                            <p className="mt-4 text-xl font-bold text-slate-900">
                                {user.weight} kg
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                    <HeartPulse size={19} />
                                </div>
                                <span className="text-xs uppercase tracking-wide text-slate-400">
                                    Blood Group
                                </span>
                            </div>
                            <p className="mt-4 text-xl font-bold text-slate-900">
                                {user.bloodGroup}
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 grid gap-6 lg:grid-cols-3">

                        {/* LEFT COLUMN */}
                        <div className="space-y-6 lg:col-span-2">

                            {/* Personal Information */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                        <User size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Personal Information
                                    </h3>
                                </div>

                                <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            First Name
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.firstName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Last Name
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.lastName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Maiden Name
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.maidenName}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <UserRound className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Gender
                                            </p>
                                            <p className="mt-1 font-semibold capitalize text-slate-800">
                                                {user.gender}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <CalendarDays className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Date of Birth
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.birthDate}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Eye className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Eye Color
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.eyeColor}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Hair Color
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.hair?.color}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Hair Type
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.hair?.type}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <HeartPulse className="mt-0.5 text-red-500" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Blood Group
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.bloodGroup}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                        <Phone size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Contact Information
                                    </h3>
                                </div>

                                <div className="grid gap-6 p-6 sm:grid-cols-2">

                                    <div className="flex gap-3">
                                        <Mail className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Email
                                            </p>
                                            <p className="mt-1 break-all font-semibold text-slate-800">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Phone
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <User className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Username
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                @{user.username}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            IP Address
                                        </p>
                                        <p className="mt-1 font-mono font-semibold text-slate-800">
                                            {user.ip}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                        <MapPin size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Address
                                    </h3>
                                </div>

                                <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">

                                    <div className="sm:col-span-2">
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Street Address
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.address?.address}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            City
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.address?.city}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            State
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.address?.state}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            State Code
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.address?.stateCode}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Postal Code
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.address?.postalCode}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Country
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.address?.country}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Coordinates
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                                            {user.address?.coordinates.lat},{" "}
                                            {user.address?.coordinates.lng}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                                        <Building2 size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Company
                                    </h3>
                                </div>

                                <div className="grid gap-6 p-6 sm:grid-cols-2">

                                    <div className="flex gap-3">
                                        <Building2 className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Company
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.company?.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <BriefcaseBusiness
                                            className="mt-0.5 text-slate-400"
                                            size={18}
                                        />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Job Title
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.company?.title}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Department
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.company?.department}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <MapPin className="mt-0.5 text-slate-400" size={18} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Address
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.company?.address.address},{" "}
                                                {user.company?.address.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-6">

                            {/* Education */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                                        <GraduationCap size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Education
                                    </h3>
                                </div>

                                <div className="p-6">
                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                        University
                                    </p>
                                    <p className="mt-2 font-semibold leading-6 text-slate-800">
                                        {user.university}
                                    </p>
                                </div>
                            </div>

                            {/* Banking */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                                        <CreditCard size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Banking
                                    </h3>
                                </div>

                                <div className="space-y-5 p-6">

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Card Type
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.bank?.cardType}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Card Number
                                        </p>
                                        <p className="mt-1 font-mono font-semibold text-slate-800">
                                            •••• •••• •••• {user.bank?.cardNumber.slice(-4)}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Expiry
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.bank?.cardExpire}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-slate-400">
                                                Currency
                                            </p>
                                            <p className="mt-1 font-semibold text-slate-800">
                                                {user.bank?.currency}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            IBAN
                                        </p>
                                        <p className="mt-1 break-all font-mono text-xs font-semibold text-slate-800">
                                            {user.bank?.iban}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Crypto */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                                        <Wallet size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Crypto Wallet
                                    </h3>
                                </div>

                                <div className="space-y-5 p-6">

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Coin
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.crypto?.coin}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Network
                                        </p>
                                        <p className="mt-1 font-semibold text-slate-800">
                                            {user.crypto?.network}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Wallet Address
                                        </p>

                                        <div className="mt-2 break-all rounded-xl bg-slate-50 p-3 font-mono text-xs text-slate-600">
                                            {user.crypto?.wallet}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technical */}
                            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">
                                        Technical Details
                                    </h3>
                                </div>

                                <div className="space-y-5 p-6">

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            MAC Address
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                                            {user.macAddress}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            EIN
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                                            {user.ein}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            SSN
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                                            {user.ssn}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-slate-400">
                                            Role
                                        </p>

                                        <span className="mt-2 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
                                            {user.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Agent */}
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                <Monitor size={18} />
                            </div>

                            <h3 className="font-semibold text-slate-900">
                                Browser / User Agent
                            </h3>
                        </div>

                        <div className="p-6">
                            <div className="overflow-x-auto rounded-xl bg-slate-950 p-4">
                                <code className="whitespace-nowrap font-mono text-xs text-slate-300">
                                    {user.userAgent}
                                </code>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </WebLayout>
    )
}

export default UserDetails
