from django.db import models
from . import utils
from .user import User
from .conversation import Conversation


class ConversationUser(utils.CustomModel):
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        db_clumn="conversationId",
        related_name="+",
        related_query_name="+"
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="userId",
        related_name="+",
        related_query_name="+"
    )
