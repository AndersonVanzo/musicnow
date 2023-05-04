package com.musicnow

import android.provider.MediaStore
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap

class MusicLibraryModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "MusicLibraryModule"

    private val context = reactApplicationContext.applicationContext

    @ReactMethod
    fun loadAllFiles(promise: Promise) {
        val files: WritableMap = Arguments.createMap()
        context.contentResolver.query(
            MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,
            null,
            "IS_MUSIC != 0",
            null,
            null,
        )?.use { cursor ->
            val list: ArrayList<String> = ArrayList()
            while (cursor.moveToNext()) {
                val mimeType = cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.MIME_TYPE))
                if (mimeType.equals("audio/mpeg") || mimeType.equals("audio/mp4") || mimeType.equals("audio/vnd.wav")) {
                    val fileStr = "{" +
                            "\"id\":\"${cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID))}\"," +
                            "\"title\":\"${cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.TITLE))}\"," +
                            "\"album\":\"${cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ALBUM))}\"," +
                            "\"artist\":\"${cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.ARTIST))}\"," +
                            "\"path\":\"${cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATA))}\"" +
                            "}"
                    list.add(fileStr)
                }
            }
            files.putString("files", list.toString())
        }
        promise.resolve(files)
        return
    }
}