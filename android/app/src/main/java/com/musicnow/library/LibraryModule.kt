package com.musicnow.library

import android.database.Cursor
import android.media.MediaMetadataRetriever
import android.provider.MediaStore
import android.util.Base64
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableNativeArray
import com.facebook.react.bridge.WritableNativeMap

class LibraryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "LibraryModule"
    }

    @ReactMethod
    fun loadMusicFiles(promise: Promise) {
        val response = WritableNativeArray()
        val supportedMimeTypes =
            arrayOf(
                "audio/aac",
                "audio/mp4",
                "audio/mpeg",
                "audio/wav",
                "audio/webm"
            )
        reactApplicationContext.contentResolver.query(
            MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,
            null,
            "IS_MUSIC != 0",
            null,
            null,
        )?.use { cursor: Cursor ->
            while (cursor.moveToNext()) {
                val file = WritableNativeMap()
                val mimeType =
                    cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.MIME_TYPE))
                if (!supportedMimeTypes.contains(mimeType)) {
                    continue
                }
                val filePath =
                    cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA))
                val id = cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID))
                val title =
                    cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.TITLE))
                val album =
                    cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ALBUM))
                val artist =
                    cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ARTIST))
                val durationInMillis =
                    cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DURATION))
                        .toLong()
                val durationInSeconds = durationInMillis / 1000.0
                var cover = ""
                try {
                    val retriever = MediaMetadataRetriever()
                    retriever.setDataSource(filePath)
                    val byteCover = retriever.embeddedPicture
                    if (byteCover != null) {
                        cover = "data:image/png;base64," + Base64.encodeToString(
                            byteCover,
                            Base64.DEFAULT
                        )
                    }
                } catch (e: Exception) {
                    e.printStackTrace()
                }
                file.putString("id", id)
                file.putString("title", title)
                file.putString("album", album)
                file.putString("artist", artist)
                file.putDouble("duration", durationInSeconds)
                file.putString("url", filePath)
                file.putString("artwork", cover)
                response.pushMap(file)
            }
        }
        promise.resolve(response)
        return
    }
}