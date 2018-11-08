class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:shelter_id]}"
  end

  def unsubscribed

  end

  def receive(data)
    puts data

    chat = Chat.find_or_create_by(shelter_id: params[:shelter_id])
    new_message = Message.new(body: data["message"], user: User.find(data["user"]["id"]))
    new_message.chat = chat
    new_message.save!

    chat_key = chat.id

    chat_json = {
      "chat_key": chat_key,
      "message": new_message.body,
      "id": new_message.id,
      "user": data["user"]
    }

    ActionCable.server.broadcast("chat_#{params[:shelter_id]}", chat_json)
  end
end
