"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Upload,
  File,
  FileImage,
  FileText,
  FileCode,
  FileArchive,
  FileAudio,
  FileVideo,
  CheckCircle2,
  AlertCircle,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export default function Input03() {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<
    Array<{
      id: string
      name: string
      size: number
      type: string
      progress: number
      status: "uploading" | "success" | "error"
      preview?: string
    }>
  >([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) {
      setIsDragging(true)
    }
  }

  const processFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList).map((file) => {
      const id = Math.random().toString(36).substring(2, 11)

      // Create preview for images
      let preview = undefined
      if (file.type.startsWith("image/")) {
        preview = URL.createObjectURL(file)
      }

      return {
        id,
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: "uploading" as const,
        preview,
      }
    })

    setFiles((prev) => [...prev, ...newFiles])

    // Simulate upload progress for each file
    newFiles.forEach((file) => {
      simulateUpload(file.id)
    })
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const simulateUpload = (fileId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)

        // Simulate success or error (90% success rate)
        const success = Math.random() > 0.1

        setFiles((prev) =>
          prev.map((file) =>
            file.id === fileId ? { ...file, progress, status: success ? "success" : "error" } : file,
          ),
        )
      } else {
        setFiles((prev) => prev.map((file) => (file.id === fileId ? { ...file, progress } : file)))
      }
    }, 300)
  }

  const removeFile = (fileId: string) => {
    setFiles((prev) => {
      const updatedFiles = prev.filter((file) => file.id !== fileId)
      // Clean up any object URLs to prevent memory leaks
      const fileToRemove = prev.find((file) => file.id === fileId)
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return updatedFiles
    })
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) return <FileImage className="h-5 w-5" />
    if (fileType.startsWith("text/")) return <FileText className="h-5 w-5" />
    if (fileType.startsWith("audio/")) return <FileAudio className="h-5 w-5" />
    if (fileType.startsWith("video/")) return <FileVideo className="h-5 w-5" />
    if (fileType.includes("zip") || fileType.includes("compressed") || fileType.includes("archive"))
      return <FileArchive className="h-5 w-5" />
    if (
      fileType.includes("javascript") ||
      fileType.includes("json") ||
      fileType.includes("html") ||
      fileType.includes("css")
    )
      return <FileCode className="h-5 w-5" />
    return <File className="h-5 w-5" />
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={cn(
          "relative rounded-lg border-2 border-dashed transition-all duration-300",
          "bg-background hover:bg-muted/30",
          isDragging
            ? "border-primary bg-muted/40 ring-2 ring-primary ring-offset-2 ring-offset-background"
            : "border-muted-foreground/25",
          files.length > 0 ? "p-4" : "p-8",
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileInputChange}
          accept="image/*,application/pdf,text/*,audio/*,video/*,application/zip,application/x-zip-compressed"
          tabIndex={-1}
        />

        {/* Upload area */}
        <AnimatePresence mode="wait">
          {files.length === 0 ? (
            <motion.div
              key="upload-area"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <motion.div
                className={cn(
                  "p-3 rounded-full",
                  "bg-primary/10 dark:bg-primary/20",
                  "text-primary dark:text-primary/90",
                  "mb-4",
                )}
                animate={{
                  y: isDragging ? [0, -10, 0] : 0,
                  scale: isDragging ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Upload className="h-6 w-6" />
              </motion.div>
              <h3 className="text-lg font-medium mb-1">{isDragging ? "Drop files here" : "Upload files"}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag & drop files or{" "}
                <button
                  type="button"
                  className="text-primary hover:underline focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (fileInputRef.current) {
                      fileInputRef.current.click()
                    }
                  }}
                >
                  browse
                </button>
              </p>
              <p className="text-xs text-muted-foreground">Supports images, documents, audio, video, and archives</p>
            </motion.div>
          ) : (
            <motion.div
              key="file-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium">
                  {files.length} file{files.length !== 1 && "s"}
                </h3>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (fileInputRef.current) {
                      fileInputRef.current.click()
                    }
                  }}
                >
                  Add more
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* File list */}
        <AnimatePresence>
          {files.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className={cn(
                "mb-3 last:mb-0 rounded-lg overflow-hidden",
                "border bg-background",
                "transition-all duration-200",
                file.status === "success" && "border-green-500/30 bg-green-500/5",
                file.status === "error" && "border-red-500/30 bg-red-500/5",
              )}
            >
              <div className="p-3">
                <div className="flex items-start gap-3">
                  {/* File preview or icon */}
                  <div className="flex-shrink-0">
                    {file.preview ? (
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-muted">
                        <img
                          src={file.preview || "/placeholder.svg"}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                        {getFileIcon(file.type)}
                      </div>
                    )}
                  </div>

                  {/* File info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="truncate pr-2">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 flex-shrink-0 -mt-1 -mr-1"
                        onClick={() => removeFile(file.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Remove file</span>
                      </Button>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-2">
                      {file.status === "uploading" ? (
                        <div className="space-y-1">
                          <Progress value={file.progress} className="h-1" />
                          <p className="text-xs text-muted-foreground">Uploading... {file.progress}%</p>
                        </div>
                      ) : file.status === "success" ? (
                        <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                          <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                          Upload complete
                        </div>
                      ) : (
                        <div className="flex items-center text-xs text-red-600 dark:text-red-400">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          Upload failed
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Drag overlay */}
        <AnimatePresence>
          {isDragging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-lg z-10 flex items-center justify-center"
            >
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Upload className="h-10 w-10 text-primary mb-2" />
                <p className="text-lg font-medium text-primary">Drop files to upload</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
