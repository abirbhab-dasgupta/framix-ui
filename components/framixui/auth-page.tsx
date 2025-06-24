"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, LogOut, Settings, Bell, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type AuthState = "login" | "signup" | "authenticated"

interface UserData {
  name: string
  email: string
  avatar?: string
}

export default function AuthComponent() {
  const [authState, setAuthState] = useState<AuthState>("login")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleAuth = async (type: "login" | "signup") => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setUserData({
      name: formData.name || "John Doe",
      email: formData.email || "john@example.com",
    })

    setAuthState("authenticated")
    setIsLoading(false)
  }

  const handleLogout = () => {
    setUserData(null)
    setAuthState("login")
    setFormData({ name: "", email: "", password: "", confirmPassword: "" })
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  }

  const formVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  if (authState === "authenticated" && userData) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8">
            {/* Success Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="bg-green-500 p-4 rounded-full">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* User Profile */}
            <motion.div variants={formVariants} initial="hidden" animate="visible" className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {userData.name.charAt(0).toUpperCase()}
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Welcome back, {userData.name}!
              </h2>
              <p className="text-slate-600 dark:text-slate-400">{userData.email}</p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { icon: Settings, label: "Settings" },
                { icon: Bell, label: "Notifications" },
                { icon: Shield, label: "Security" },
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:bg-slate-700 transition-colors">
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{action.label}</p>
                </motion.button>
              ))}
            </motion.div>

            {/* Logout Button */}
            <motion.div variants={formVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
              <Button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white border-0 rounded-2xl h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <LogOut className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Sign Out
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="relative p-8 pb-6">
            <motion.h1
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2"
            >
              {authState === "login" ? "Welcome Back" : "Create Account"}
            </motion.h1>

            <motion.p
              variants={formVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400"
            >
              {authState === "login" ? "Sign in to continue your journey" : "Join us and start your adventure"}
            </motion.p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <AnimatePresence mode="wait">
              <motion.form
                key={authState}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (authState === "login" || authState === "signup") {
                    handleAuth(authState)
                  }
                }}
                className="space-y-6"
              >
                {authState === "signup" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors duration-300" />
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="pl-12 h-14 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-2xl focus:bg-white dark:focus:bg-slate-600 focus:border-slate-400 dark:focus:border-slate-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors duration-300" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="pl-12 h-14 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-2xl focus:bg-white dark:focus:bg-slate-600 focus:border-slate-400 dark:focus:border-slate-500 transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors duration-300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    className="pl-12 pr-12 h-14 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-2xl focus:bg-white dark:focus:bg-slate-600 focus:border-slate-400 dark:focus:border-slate-500 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {authState === "signup" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-600 dark:group-focus-within:text-slate-300 transition-colors duration-300" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                        className="pl-12 h-14 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-2xl focus:bg-white dark:focus:bg-slate-600 focus:border-slate-400 dark:focus:border-slate-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                {authState === "login" && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-300"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-slate-800 hover:bg-slate-900 dark:bg-slate-600 dark:hover:bg-slate-500 text-white border-0 rounded-2xl h-14 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      {authState === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </motion.form>
            </AnimatePresence>

            {/* Toggle Auth Mode */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {authState === "login" ? "Don't have an account?" : "Already have an account?"}
              </p>

              <button
                onClick={() => setAuthState(authState === "login" ? "signup" : "login")}
                className="text-slate-800 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-400 font-semibold transition-colors duration-300 hover:underline"
              >
                {authState === "login" ? "Create Account" : "Sign In"}
              </button>
            </motion.div>

            {/* Social Login */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300 dark:border-slate-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {/* Google Login */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </motion.button>

                {/* GitHub Login */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-3 bg-slate-900 dark:bg-slate-700 border border-slate-800 dark:border-slate-600 rounded-xl font-medium text-white shadow-sm hover:shadow-md hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Continue with GitHub
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
