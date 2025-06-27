"use client"

import { motion } from "motion/react"
import { Check, CreditCard, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden"
    >
      {/* Success Header */}
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-8 text-center">
        {/* Animated Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative mx-auto w-16 h-16 mb-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            >
              <Check className="w-6 h-6 text-green-500" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
        >
          Payment Successful!
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          Your transaction has been completed
        </motion.p>
      </div>

      {/* Payment Details */}
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <CreditCard className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Amount</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Visa •••• 4242</p>
            </div>
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">$99.00</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2 text-sm"
        >
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Transaction ID</span>
            <span className="text-gray-900 dark:text-white font-mono">#TXN-2024-001</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Date</span>
            <span className="text-gray-900 dark:text-white">Dec 28, 2024</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex space-x-3 pt-4"
        >
          <Button variant="outline" size="sm" className="flex-1 border-gray-200 dark:border-gray-700 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Receipt
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0"
          >
            Continue
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
