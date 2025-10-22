'use client'

import React, { useEffect, useRef, useState } from 'react'

type FormState = {
    name: string
    email: string
    subject: string
    message: string
}

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
    const [toastVisible, setToastVisible] = useState(false)
    const [progress, setProgress] = useState(0)
    const progressRef = useRef<number | null>(null)
    const MESSAGE_MAX = 500

    // Basic validators
    const emailValid = (v: string) => /^\S+@\S+\.\S+$/.test(v.trim())

    function validateField<K extends keyof FormState>(key: K, value: string) {
        switch (key) {
            case 'name':
                if (!value.trim()) return 'Please enter your name'
                return ''
            case 'email':
                if (!value.trim()) return 'Email is required'
                if (!emailValid(value)) return 'Invalid email address'
                return ''
            case 'message':
                if (!value.trim()) return 'Message is required'
                if (value.trim().length < 10) return 'Message must be at least 10 characters'
                if (value.length > MESSAGE_MAX) return `Max ${MESSAGE_MAX} characters`
                return ''
            default:
                return ''
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormState, value) }))
    }

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            setToastVisible(true)
            const t = setTimeout(() => setToastVisible(false), 3500)
            return () => clearTimeout(t)
        }
    }, [status])

    useEffect(() => {
        return () => {
            if (progressRef.current !== null) {
                window.clearInterval(progressRef.current)
            }
        }
    }, [])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const newErrors: Partial<Record<keyof FormState, string>> = {}
            ; (Object.keys(form) as (keyof FormState)[]).forEach((k) => {
                const err = validateField(k, form[k])
                if (err) newErrors[k] = err
            })
        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            setStatus('error')
            return
        }

        setLoading(true)
        setStatus('idle')
        setProgress(6)

        progressRef.current = window.setInterval(() => {
            setProgress((p) => {
                if (p >= 95) return p
                return p + Math.floor(Math.random() * 8) + 3
            })
        }, 350)

        try {
            await new Promise((res) => setTimeout(res, 1200))
            setProgress(100)
            setStatus('success')
            setForm({ name: '', email: '', subject: '', message: '' })
            setErrors({})
        } catch {
            setStatus('error')
        } finally {
            setLoading(false)
            if (progressRef.current !== null) {
                window.clearInterval(progressRef.current)
                progressRef.current = null
            }
            setTimeout(() => setProgress(0), 600)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 px-6 sm:px-10 lg:px-20">
            {/* Toast */}
            <div className="fixed right-6 top-6 z-50">
                <div
                    aria-live="polite"
                    className={`transform transition-all duration-300 ${toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    {status === 'success' && (
                        <div className="rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 shadow flex items-center gap-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Message sent — we will be in touch!</span>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="rounded-lg bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 shadow">
                            There was an issue. Check your inputs and try again.
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1   gap-12 items-start">
                {/* Left - Brand / Info */}
                <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#0f172a00_0%,#0f172a10_100%)] p-8 sm:p-12  ">
                    <div className="absolute -right-24 -top-24 w-72 h-72 bg-gradient-to-tr from-pink-300 to-purple-400 opacity-20 blur-3xl pointer-events-none transform rotate-12" />
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-purple-700 to-pink-500 text-white font-extrabold text-lg tracking-tight shadow-lg">
                            TF
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold text-slate-900">Tenfinity</h1>
                            <p className="text-sm text-slate-500">Modern clothing for confident living</p>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <p className="text-slate-700 leading-relaxed">
                            We’d love to hear from you — whether you need styling advice, help with an order, or want to talk
                            about collaborations. Our team replies within 24 hours.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-lg bg-white/60 p-4">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase">Customer Service</h3>
                                <p className="mt-1 text-sm text-slate-700">support@tenfinity.com</p>
                                <p className="mt-1 text-sm text-slate-500">Mon - Fri, 9am - 6pm</p>
                            </div>
                            <div className="rounded-lg bg-white/60 p-4">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase">Phone</h3>
                                <p className="mt-1 text-sm text-slate-700">+1 (555) 123-4567</p>
                                <p className="mt-1 text-sm text-slate-500">Live chat available on site</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <h4 className="text-xs font-semibold text-slate-500 uppercase mb-2">Follow</h4>
                            <div className="flex gap-3">
                                {/* Socials */}
                                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm hover:scale-105 transition">
                                    {/* Instagram icon */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-700">
                                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                {/* Add more social icons as needed */}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Tenfinity. All rights reserved.</div>
                </div>

                {/* Right - Form */}
                <div>
                    <div className="rounded-2xl bg-white shadow-2xl p-8 sm:p-10">
                        <h2 className="text-2xl font-extrabold text-slate-900">Contact Us</h2>
                        <p className="mt-2 text-sm text-slate-500">Tell us about your inquiry and we’ll get back to you soon.</p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FloatingInput name="name" label="Full name" value={form.name} onChange={handleChange} error={errors.name} required />
                                <FloatingInput
                                    name="email"
                                    label="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    type="email"
                                    required
                                    showValidIcon
                                />
                            </div>

                            <FloatingInput name="subject" label="Subject" value={form.subject} onChange={handleChange} error={errors.subject} />

                            <FloatingTextarea
                                name="message"
                                label="Message"
                                value={form.message}
                                onChange={handleChange}
                                error={errors.message}
                                rows={6}
                                maxLength={MESSAGE_MAX}
                            />

                            {/* Progress bar */}
                            {progress > 0 && (
                                <div className="w-full bg-slate-100 h-1 rounded overflow-hidden mt-1">
                                    <div
                                        style={{ width: `${Math.min(100, progress)}%` }}
                                        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                                    />
                                </div>
                            )}

                            <div className="flex items-center justify-between gap-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex items-center gap-3 rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white shadow hover:scale-[1.01] active:scale-95 transition disabled:opacity-60"
                                >
                                    <SendIcon loading={loading} />
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>

                                <div className="text-sm text-slate-500">
                                    {status === 'success' && <span className="text-green-600">Message sent — we’ll be in touch!</span>}
                                    {status === 'error' && <span className="text-red-600">Please check your info and try again.</span>}
                                </div>
                            </div>
                        </form>

                        <div className="mt-6 border-t pt-4 text-sm text-slate-500">
                            Prefer other options? Visit our{' '}
                            <a href="#" className="font-medium text-slate-900 underline">
                                Help Center
                            </a>{' '}
                            or check shipping &amp; returns.
                        </div>
                    </div>

                    <div className="mt-6 text-center text-xs text-slate-400">
                        By contacting us you agree to our <a href="#" className="underline">terms</a> and{' '}
                        <a href="#" className="underline">privacy policy</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ---- Small UI primitives ---- */

function FloatingInput(props: {
    name: string
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    error?: string
    type?: string
    required?: boolean
    showValidIcon?: boolean
}) {
    const { name, label, value, onChange, error, type = 'text', required, showValidIcon } = props
    const isValid = !error && value.length > 0
    return (
        <label className="relative block">
            <div className="flex items-center gap-2">
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
                    placeholder=" "
                    aria-label={label}
                    required={required}
                    className={`peer mt-1 block w-full rounded-md border px-3 py-2 text-sm placeholder-transparent focus:outline-none focus:ring-2 transition ${error ? 'border-rose-300 focus:ring-rose-200' : 'border-slate-200 focus:ring-purple-400'
                        }`}
                />
                {showValidIcon && (
                    <div aria-hidden className="w-6 h-6 flex items-center justify-center">
                        {isValid ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : value.length > 0 ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-rose-500">
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : null}
                    </div>
                )}
            </div>

            <span
                className={`absolute left-3 -top-2.5 text-xs transition-all bg-white px-1 pointer-events-none ${error ? 'text-rose-600' : 'text-slate-500'
                    } peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs`}
            >
                {label}
            </span>

            {error ? <div className="mt-1 text-xs text-rose-600">{error}</div> : null}
        </label>
    )
}

function FloatingTextarea(props: {
    name: string
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    error?: string
    rows?: number
    maxLength?: number
}) {
    const { name, label, value, onChange, error, rows = 4, maxLength } = props
    return (
        <label className="relative block">
            <textarea
                name={name}
                value={value}
                onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                rows={rows}
                placeholder=" "
                aria-label={label}
                maxLength={maxLength}
                className={`peer mt-1 block w-full rounded-md border px-3 py-2 text-sm placeholder-transparent resize-none focus:outline-none focus:ring-2 transition ${error ? 'border-rose-300 focus:ring-rose-200' : 'border-slate-200 focus:ring-purple-400'
                    }`}
            />
            <span
                className={`absolute left-3 -top-2.5 text-xs transition-all bg-white px-1 pointer-events-none ${error ? 'text-rose-600' : 'text-slate-500'
                    } peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs`}
            >
                {label}
            </span>

            <div className="mt-1 flex items-center justify-between">
                {error ? <div className="text-xs text-rose-600">{error}</div> : <div className="text-xs text-transparent">.</div>}
                {typeof maxLength === 'number' && <div className="text-xs text-slate-400">{value.length}/{maxLength}</div>}
            </div>
        </label>
    )
}

function SendIcon({ loading }: { loading: boolean }) {
    return (
        <span className={`inline-block ${loading ? 'animate-spin' : ''}`} aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2l-7 20 1-7 7-7-7 1 7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    )
}

